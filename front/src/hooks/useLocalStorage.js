import {useEffect, useState} from "react";

export const useLocalStorage = () => {
  const [name, setName] = useState(null)

  useEffect(() => {
    setName(localStorage.getItem('name'))
  },[])

  return name
}
