import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // التمرير إلى أعلى الصفحة فور تغيير المسار
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
