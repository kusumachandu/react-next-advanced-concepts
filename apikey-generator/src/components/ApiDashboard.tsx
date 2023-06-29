import { Key } from "lucide-react";
import { FC } from "react";
import LargeHeading from "./ui/LargeHading";
import Paragraph from "./ui/Paragraph";
import { User } from "@prisma/client";
import { Input } from "./ui/Input";
import Table from "./Table";

interface ApiDashboardProps {
  allApiKeys: any;
  activeApiKey: any;
  user: User;
  userRequests: any;
  serialRequest: any
}

const ApiDashboard: FC<ApiDashboardProps> = ({ allApiKeys, activeApiKey, user, userRequests, serialRequest }) => {
  // console.log(userRequests, serialRequest, activeApiKey, "user", user.name);

  return (
    <div className="container md:max-w-2xl text-slate-900 dark:text-slate-100">
      <div className="flex flex-col gap-6 items-center">
        <LargeHeading>Welcome Back, <span className="text-light-gold">{user.name}</span></LargeHeading>
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-start mt-5 items-center">
        <Paragraph>Your Api Key:</Paragraph>
        <Input className="w-fit truncate" readOnly value={activeApiKey.key} /> { /* truncate helps in replacing the overflow content to (...) */}
      </div>
      <Paragraph className="text-center md:text-left mt-4 -mb-4">Your Api History:</Paragraph>
      <Table userRequests={userRequests} />
    </div>
  );
};

export default ApiDashboard;
