// para capturar un parametro uno mismo crea su hook segun ejemplo de documentacion https://v5.reactrouter.com/web/example/query-parameters
import React from "react";
import { useLocation,} from "react-router-dom";


export function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  