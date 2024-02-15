"use client";

import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; // TODO: Change to API call

  //   The order of the tests below is important
  if (!data?.length && query.search) {
    // Data is emty because user searches for something that doesn't exist
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    // Data is emty because user searches for something that doesn't exist
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div>{JSON.stringify(query)}</div>;
};
