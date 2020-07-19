import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useTranslation } from "react-i18next";

// Page context values created in `gatsby-node.js`
export interface PageContextValue {
  originalPath: any | String;
  locale: any | String;
}
export interface PageContextProviderProps {
  pageContext: PageContextValue;
  children: ReactNode;
}

const PageContext = createContext<PageContextValue>({} as PageContextValue);

export const usePageContext = (): PageContextValue =>
  useContext<PageContextValue>(PageContext);

/**
 * Page context provider to provide the file path and language (`locale`), then set up the language for the `i18n`.
 *
 * @param {{pageContext: object, children: ReactNode}} props
 */
export const PageContextProvider: React.FC<PageContextProviderProps> = ({
  children,
  pageContext,
}) => {
  // Because context uses reference identity to determine when to re-render,
  // there are some gotchas that could trigger unintentional renders in
  // consumers when a provider’s parent re-renders. For this, we use a state.
  const [value] = useState(pageContext);
  const { i18n } = useTranslation();

  // Set up the language in i18n.
  useEffect(() => {
    if (i18n.language != pageContext.locale)
      i18n.changeLanguage(pageContext.locale);
  }, [pageContext.locale]);

  return (
    <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>
  );
};
