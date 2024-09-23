import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function useCategoryName() {
  const [category, setCategory] = useState<any>({});
  const { id } = useParams();
  const pathname = usePathname();

  useEffect(() => {
    const getCategoryName = async () => {
      const res = await fetch(`/api/category/${id}`);
      const category = await res.json();
      setCategory(category);
    };

    getCategoryName();
  }, [pathname]);

  if (Object.keys(category).length > 1) {
    return category;
  } else {
    return false;
  }
}

export default useCategoryName;
