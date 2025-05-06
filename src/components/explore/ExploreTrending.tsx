import { TrendingHashtag } from "@/types/hash.types";
import Link from "next/link";
import MessageHashtag from "../messages/MessageHastag";

type ExploreTrendingProps = {
  hashes: TrendingHashtag[];
};

const ExploreTrending = ({ hashes }: ExploreTrendingProps) => {
  if (!hashes || hashes.length === 0) return <></>;

  return (
    <>
      <div
        className="bg-gray-200 rounded-lg px-8 py-4"
        style={{ minWidth: 250 }}
      >
        <h2 className="mb-2">Trending</h2>
        {hashes.slice(0, 2).map((hash, index) => (
          <div className="mb-4" key={`trending-hash-${index}`}>
            <MessageHashtag hash={hash} />
          </div>
        ))}

        {hashes.length > 2 && (
          <Link href="/explore?type=HASHTAGS">
            <div className="text-center link-primary">Ver mas</div>
          </Link>
        )}
      </div>
    </>
  );
};

export default ExploreTrending;
