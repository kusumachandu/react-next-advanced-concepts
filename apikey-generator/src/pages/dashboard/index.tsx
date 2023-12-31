import { FC, useEffect, useState } from "react";
import type { Metadata } from "next";
import { getSession } from "next-auth/react";
import { Session } from "inspector";
import RequestApiKey from "@/components/RequestApiKey";
import ApiDashboard from "@/components/ApiDashboard";

export const metadata: Metadata = {
  title: "Similarity-Api | Dashboard",
  description: "Free & Open source similiarity Api",
};

const Dashboard: FC = ({}) => {
  const [user, setUser] = useState<Session | any>({});
  const [apiKey, setApiKey] = useState<any>();
  const [allKeys, setAllKeys] = useState<any>();
  const [activeApiKey, setActiveApiKey] = useState<any>();
  const [userRequests, setUserRequests] = useState<any>();
  const [serialRequests, setSerialRequests] = useState<any>();

  useEffect(() => {
    async function fetchSession() {
      try {
        const response = await getSession();
        setUser(response?.user);
      } catch (error) {
        console.error(error);
      }
    }

    fetchSession();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (!user) {
        return;
      }

      try {
        const res = await fetch('/api/session');
        const data = await res.json();
        setApiKey(data.apiKey);
        setAllKeys(data.apiKeys);
        setActiveApiKey(data.activeApiKey);
        setUserRequests(data.userRequests);
        setSerialRequests(data.serializedRequest);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();

  }, [user])

  return (
    <div className="max-w-7xl mx-auto">
      { apiKey ? 
        <ApiDashboard allApiKeys={allKeys} activeApiKey={activeApiKey} user={user} userRequests={userRequests} serialRequest={serialRequests}  /> 
        : 
        <RequestApiKey /> }
    </div>
  );
};

export default Dashboard;
