import React from "react";

interface OrgContextModel {
  organization: string;
  setOrganization: (organization: string) => void;
}

export const OrgContext = React.createContext<OrgContextModel>({
  organization: "lemoncode",
  setOrganization: () => {},
});

export const OrgProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [organization, setOrganization] = React.useState("lemoncode");

  return (
    <OrgContext.Provider value={{ organization, setOrganization }}>
      {children}
    </OrgContext.Provider>
  );
};
