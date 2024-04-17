import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

// Define the type for your context data
interface QueryContextType {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

// Create the context
const QueryContext = createContext<QueryContextType | undefined>(undefined);

// Create a custom hook to use the context
export const useQueryContext = (): QueryContextType => {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error("useQueryContext must be used within a QueryProvider");
  }
  return context;
};

// Create a provider component
export const QueryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<any>(null);

  return (
    <QueryContext.Provider value={{ data, setData }}>
      {children}
    </QueryContext.Provider>
  );
};

// Declare the types for attaching to global context or can create d.ts file for it
declare global {
  interface Window {
    MyApp: {
      QueryContext?: React.Context<QueryContextType | undefined>;
      useQueryContext?: () => QueryContextType;
    };
  }
}

// Attach the context to the global window object
if (typeof window !== "undefined") {
  if (!window.MyApp) {
    window.MyApp = {};
  }
  window.MyApp.QueryContext = QueryContext;
  window.MyApp.useQueryContext = useQueryContext;
}
