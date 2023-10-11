import { useState, useEffect, useCallback } from "react";

function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme !== null) {
      setIsDark(JSON.parse(theme));
    }
  }, []);

  const handelChange = useCallback((e) => {
    setIsDark(e.target.checked);
  },[]);

//   как сделать лучше с сохранение в локалсторедж, чтоб этот второй юсэфект не рендерился при первом рендеринге два раза? Или как лучше вообще сохранять в локал?

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  return [isDark, handelChange];
}

export default useTheme;
