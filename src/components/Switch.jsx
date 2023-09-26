import { useTheme } from "../hooks/useTheme";
import "../styles/components/Switch.css"

export const Switch = () => {

    const [theme, handleChange] = useTheme('dark');

    return (
        <div className="container-switch">
            <span>Change Theme </span>
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
                <span className="slider"></span>
            </label>
        </div>
    );
};