
import { useEffect, useState, createContext } from 'react';
interface Theme {
    style:string,
    colorText: string,
    mainPageBackgroundColor: string,
    secondPageBackgroundColor: string,
}
interface IThemeContext{
    actualTheme:Theme,
    setLgTheme:Function
}
const lightTheme: Theme = {
    style:"light",
    colorText: "#205375",
    mainPageBackgroundColor: "#EFEFEF",
    secondPageBackgroundColor: "#EFEFEF"
}
const darkTheme: Theme = {
    style:"dark",
    colorText: "#fff",
    mainPageBackgroundColor: "#2C394B",
    secondPageBackgroundColor: "#112B3C"
}
const initialValue: IThemeContext = {
    actualTheme: lightTheme,
    setLgTheme:()=>{}
}
export const ThemeContext = createContext<IThemeContext>(initialValue);
const ThemeContextProvider = ({ children }: any): JSX.Element => {
    const [lgTheme, setLgTheme] = useState(true);
    const [actualTheme, setActualTheme] = useState<Theme>(lightTheme);
    useEffect(() => {
        const handleChange = () => {
            if (lgTheme) {
                return setActualTheme(lightTheme);
            }
            return setActualTheme(darkTheme)
        }
        handleChange();
    }, [lgTheme])
    return (
        <ThemeContext.Provider value={{ setLgTheme, actualTheme }} >
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider