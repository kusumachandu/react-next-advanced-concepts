import React, { useState } from 'react'

export default function Search () {
  const [options, setOptions] = useState([
    'option1',
    'option2',
    'option3',
    'option4'
  ])

  const [selectedOptions, setSelectedOptions] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = e => {
    setSearchTerm(e.target.value);
    console.log(searchTerm)
  }

  const handleSelectedOption = (option) => {
    if(!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  const handleRemoveOption = (option) => {
    const updatedSelectedOptions = selectedOptions.filter(
      (selectedOptions) => selectedOptions !== option
    )

    setSelectedOptions(updatedSelectedOptions);
  }

  const filteredOptions = options.filter((option) => (
    option.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  ))


  return (
    <div className='py-10'>
    <div className="selected-options border py-4 w-1/2 mx-auto mb-4 rounded-lg border-black flex gap-4 px-4">
        {selectedOptions.map((option) => (
          <div
            key={option}
            className="selected-option bg-slate-900 text-slate-50 flex gap-2 border py-1 px-3 rounded-xl items-center"
            onClick={() => handleRemoveOption(option)}
          >
            <p>
              {option}
            </p>
            <span className="remove-button font-semibold bg-red-400 cursor-pointer flex items-center px-2 rounded-full">x</span>
          </div>
        ))}
      </div>
      <div>
        <label className='font-semibold'>Skills: </label>
        <input
          type='text'
          onChange={handleChange}
          className='border rounded-md px-2 border-black py-1'
          placeholder='Search Here ...'
        />
      </div>
      <div className="options border w-1/3 mt-4 mx-auto bg-gray-300 rounded-lg py-4">
        {filteredOptions.map((option) => (
          <div
            key={option}
            className="option py-2 cursor-pointer"
            onClick={() => handleSelectedOption(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  )
}
