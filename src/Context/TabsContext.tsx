import React from 'react';

interface Tabs {
  id: string;
  title: string;
  content: string;
}

const tabs: Tabs[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsContext = React.createContext(tabs);

interface Props {
  children: React.ReactNode;
}

export const TabsProvider: React.FC<Props> = ({ children }) => {
  return <TabsContext.Provider value={tabs}>{children}</TabsContext.Provider>;
};