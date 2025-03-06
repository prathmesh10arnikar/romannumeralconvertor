import React, { useState } from 'react'
import {Button, Provider, View, defaultTheme, Heading, TextField, Text, Switch, Flex} from '@adobe/react-spectrum'

const RomanNumeralConvertor = () => {
  const [number, setNumber] = useState("");
  const [roman, setRoman] = useState("");
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL
  console.log(API_URL);

  // Fetch the roman numeral for the given number
  const fetchRomanNumeral = async () => {
    if(!number || isNaN(number) || number < 1 || number > 3999) {
      setError("Please enter a number between 1 and 3999");
      return;
    }

    setLoading(true);
    setRoman("");
    setError("");

    try {
      const response = await fetch(`${API_URL}?query=${number}`);
      const data = await response.json();

      if(response.ok && data.output) {
        setRoman(data.output);
      } else {
        setError(data.message || "Failed to fetch roman numeral");
      }
    } catch (e) {
      setError("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Reset error when the user starts typing a number
  const handleInputChange = (value) => {
    setNumber(value);
    if (error) setError("");
    if (value) setRoman("");
  }

  const isButtonEnabled = number && !loading && !isNaN(number) && number > 0;

  return (
    <Provider theme={defaultTheme} colorScheme={isDarkMode ? "dark" : "light"}>
      <Flex justifyContent="center" alignItems="center" direction="column" gap="size-300">
        <View height="min(90vh, size-6000)" backgroundColor="gray-200" width="min(90vw, size-6000)">
          <Flex direction="column" alignItems="center" gap="size-600">
            <Flex justifyContent="end" width="100%" margin="15px">
              <Switch 
                isSelected={isDarkMode} 
                onChange={setIsDarkMode}
                >Dark Mode
              </Switch>
            </Flex>
        
        <Heading level={2}>Roman Numeral Convertor</Heading>

        <TextField
          label='Enter a number'
          value={number}
          onChange={handleInputChange}
          type='number'
          width="250px"
        />

       <Button variant='primary' onPress={fetchRomanNumeral} isDisabled={!isButtonEnabled}
       >Convert to roman numeral
       </Button>

       {roman && <Text ><strong>Roman numeral</strong>: {roman}</Text>}
       {error && <Text UNSAFE_style={{color: "red"}}>{error}</Text>}
       </Flex>

      </View>
     </Flex>
    </Provider>
  );
};

export default RomanNumeralConvertor;
