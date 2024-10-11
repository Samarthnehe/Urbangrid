import React from "react";
import { Button } from "../ui/button";
import { WorkspaceCard } from "./WorkspaceCard";

import WorkspaceImg from "../../assets/workspace-bg.webp";

export const ExploreWorkspaces = () => {
  return (
    <div
      className="h-auto py-32 md:h-[120vh] w-[100vw] flex items-center justify-center bg-black relative"
      style={{
        background: `url(${WorkspaceImg.src}) no-repeat fixed`,
        backgroundSize: `cover`,
      }}
    >
      <div className="container mx-[5%] md:mx-[10%] flex flex-col justify-center bg-white-400 w-full h-auto md:h-full">
        <div className="flex flex-col md:flex-row justify-between align-top mb-20 space-y-12 md:space-y-0">
          <h1
            className="font-normal text-4xl text-white md:mr-36"
            style={{ flex: 4 }}
          >
            Workspaces for{" "}
            <span className="font-semibold text-4xl text-[#16AE7E]">
              Startups and Corporates
            </span>
            , choose a space that fits your needs
          </h1>
          <Button
            variant="default"
            size="lg"
            className="w-[50%] md:flex-1 bg-white px-[24px] py-[12px] text-[#16AE7E] rounded-[8px] hover:bg-[#16AE7E] hover:text-white"
          >
            Explore our spaces
          </Button>
        </div>
        <div className="w-[80vw] flex justify-between items-center flex-col md:flex-row space-y-12 md:space-y-0">
          <WorkspaceCard
            imgUrl="https://s3-alpha-sig.figma.com/img/c3ec/8087/b28b4f3e9069f6d2f2beec754319c52f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z4rKdv3hY8Bi6GKR5rOChn5nOTj0pTPe-V-qgPn-3U50BCnofFUe~O-dICMh3V7HqsnsX2lps-nSyFuML6RTSmxorYeV02CsHfQbYK6j~NITtK68oMQL~VOBAvmiMNrT3oiKjkEasUvWHOkMYfJxacyUfBmaDZBrOrTz7J5gdu96lNF8qB86l4NY0X74DehitLBDbpR-J9WBYty1GNAeLN2xfrbWY4ndysU5F6CMfehq4Q8W6s2pj1Ikne2qpR2MD6SgSgXT8Q6mIL84KhEwG4Qt-JlrxDxjcXqYWOIP-WdfUiXZMeVD0EEoYLojrEM7zfbUxWkxa9aAYSs9cX62BA__"
            id="1"
            title="Coworking Spaces"
            description="Lorem ipsum dolor sit amet consectetur. Lorem vitae ante sem amet nisl venenatis"
            ctaText="Know more"
          />
          <WorkspaceCard
            imgUrl="https://s3-alpha-sig.figma.com/img/9968/1c4d/7936bec124c38a11b6bd3bd22e749533?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=flsp-9plE0oj5zeiSOJ47mslQHQUN9dgKmt4MESETUzREZecCXRpb6KNB-O0yBauO7aGzzYs9RAN3u1L7Uc7G48hlu1Uq2-8wU-dacxLk4Xfp4SRYgizu8H3dc~CVk6CdVdXiuipebnLkLvvsWOHZO-Pj~094i-HG6NVgd0uTARIPN2OuyIsB5EQYWT9utIG~gePkUBZ-8bRMEQsKPzZW9LiCb62n3yEWSXtRJ7uK4koZ-ckZbMqW3g8HiXEDfQc1yNqaKA7Q55OEciZQZetEBgEk1mjn1dcSlh6eaE02d-l09BbYu03v4BF~xGjtPz7JHO5Ol5VRh7aE-bqWioCgA__"
            id="1"
            title="Coworking Spaces"
            description="Lorem ipsum dolor sit amet consectetur. Lorem vitae ante sem amet nisl venenatis"
            ctaText="Know more"
          />
          <WorkspaceCard
            imgUrl="https://s3-alpha-sig.figma.com/img/c0f0/e8dd/70041f1f10df92981f1760880ea1cce6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKc813l3l8qn3fNCKWPJ4WRwYou6Y-xnPXaFgUXtCRxhKi-L~tEm-xlvimDh34StwF09kGbHK61Yq2fhQdVdfb9Y~FYI8IQ0BGiFBpz-ArgNKJTO1aKkeWsJAi~ayNWy2tsI7gBf3uwqfryVsPbJNTF38lqTACSKPWcfiwi4LnTW327hSns1YDdXlaoNPrlIp25jrdTyO4hH-bVXSaCw5CoW82dKwRd6LLjl5MpciDJWrY03L4P9YFQNyHYldD3gfELnu-igytpQquDaTI5TYyi3nAyJ3E4KSec0rKa4t6sFIjqiEybpRHk5PUcUy6IA9A5EKcYA19vb47SSIPRzBA__"
            id="1"
            title="Coworking Spaces"
            description="Lorem ipsum dolor sit amet consectetur. Lorem vitae ante sem amet nisl venenatis"
            ctaText="Know more"
          />
        </div>
      </div>
    </div>
  );
};
