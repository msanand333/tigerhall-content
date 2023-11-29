import { Box, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { ContentCardProps } from "./types";
import { ShareIcon } from "../Icons/ShareIcon";
import { BookmarkIcon } from "../Icons/BookmarkIcon";
import { TimeIcon } from "@chakra-ui/icons";

// Functional component representing a content card
export const ContentCard = (props: ContentCardProps) => {
  const {
    title = "",
    imageSrc = "",
    ownerName = "",
    ownerTitle = "",
    length,
  } = props;

  return (
    <div className="w-[244px]  rounded-lg text-white">
      <Box
        as="a"
        href="javascipt:void(0)"
        display="block"
        width="100%"
        height="120px"
        borderTopRadius="8px"
        position="relative"
      >
        <Image
          width="100%"
          height="100%"
          src={imageSrc}
          alt={title}
          objectFit="cover"
          borderTopRadius="8px"
        />
        {props.length && (
          <div className="absolute bottom-2 right-2 z-10 inline-flex items-center gap-1 rounded-full bg-[#000000B2] px-2 py-1 text-xs text-white">
            <TimeIcon />
            <span className="text-xs font-bold">{length}m</span>
          </div>
        )}
      </Box>
      <Box
        width={"100%"}
        height="160px"
        backgroundColor="#fff"
        objectFit="cover"
        borderBottomRadius="8px"
        color={"black"}
        padding="8px"
        position="relative"
      >
        <h3 className="m-0 mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium uppercase text-grey-700">
          {title}
        </h3>
        <h4 className="m-0 mb-2 line-clamp-3 text-md font-bold text-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione!
        </h4>
        <h6 className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium">
          {ownerName}
        </h6>
        <span className="block  overflow-hidden text-ellipsis whitespace-nowrap align-top text-xs font-bold text-grey-700">
          {ownerTitle}
        </span>

        <Box
          display="inline-flex"
          alignItems="center"
          gap="12px"
          position="absolute"
          bottom="8px"
          right="8px"
        >
          <ShareIcon boxSize="16px" color="#FF5900" cursor="pointer" />
          <BookmarkIcon boxSize="16px" color="#FF5900" cursor="pointer" />
        </Box>
      </Box>
    </div>
  );
};
