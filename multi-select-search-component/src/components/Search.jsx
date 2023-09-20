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
      setSelectedOptions([...selectedOptions, option]);
    }
  }

  const handleRemoveOption = (option) => {
    const updatedSelectedOptions = selectedOptions.filter(
      (selectedOptions) => selectedOptions !== option
    )

    setSelectedOptions(updatedSelectedOptions);
  }

  const filteredOptions = options.filter((option) => 
    option.toLowerCase().includes(searchTerm.toLowerCase())
  )

  console.log(filteredOptions);


  return (
    <div className='py-10'>
    <div className="selected-options">
        {selectedOptions.map((option) => (
          <div
            key={option}
            className="selected-option"
            onClick={() => handleRemoveOption(option)}
          >
            {option}
            <span className="remove-button">x</span>
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
      <div className="options">
        {filteredOptions.map((option) => (
          <div
            key={option}
            className="option"
            onClick={() => handleSelectedOption(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  )
}
