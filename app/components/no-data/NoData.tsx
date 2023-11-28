import { WarningTwoIcon } from "@chakra-ui/icons";
import React from "react";

export const NoData: React.FC = () => {
  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <WarningTwoIcon boxSize="100px" color="#FF5900" />
      <p className="mt-3 text-2xl italic text-white">
        No data found. Try different search query
      </p>
    </div>
  );
};
