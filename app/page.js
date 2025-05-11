import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";

const getAllItems = async () => {
  const requestHeaders = headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const baseUrl = process.env.API_BASE_URL || `${protocol}://${host}`;
  console.log("✅ BASE URL:", baseUrl);

  const response = await fetch(`${baseUrl}/api/item/readall`, {
    cache: "no-store",
  });

  const jsonData = await response.json();
  return jsonData.allitems ?? [];
};

const ReadAllItems = async () => {
  const allItems = await getAllItems();

  return (
    <div className="grid-container-in">
      {Array.isArray(allItems) &&
        allItems.map((item) => (
          <Link href={`/item/readsingle/${item._id}`} key={item._id}>
            <div>
              <Image
                src={item.image}
                width={750}
                height={500}
                alt={item.title}
                priority
              />
              <h2>¥{item.price?.trim()}</h2>
              <h3>{item.title}</h3>
              <p>{item.description?.substring(0, 80)}...</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ReadAllItems;