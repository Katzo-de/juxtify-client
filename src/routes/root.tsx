import Card from "../components/Card";

function Root() {
  const primaryCardColor = "#F6C8C9";
  const spotifyCards = [
    {
      variant: "playlist",
      title: "1989",
      tracksCount: 13,
      description:
        "Taylor Swift's fifth studio album, featuring hits like 'Shake It Off' and 'Blank Space'.",
      primaryColor: primaryCardColor,
      imageUrl:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe342e7294ed3dc27b167f47d/2/en/default",
    },
    {
      variant: "folder",
      title: "Scorpion",
      tracksCount: 25,
      description:
        "Drake's fifth studio album, a double album with one side dedicated to rap and the other to R&B.",
      primaryColor: primaryCardColor,
      imageUrl:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe342e7294ed3dc27b167f47d/2/en/default",
    },
    {
      variant: "dailyMix",
      title: "Divide",
      tracksCount: 16,
      description:
        "Ed Sheeran's third studio album, featuring hits like 'Shape of You' and 'Castle on the Hill'.",
      primaryColor: primaryCardColor,
      imageUrl:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe342e7294ed3dc27b167f47d/2/en/default",
    },
    {
      variant: "album",
      title: "Abbey Road",
      tracksCount: 11,
      description: "The beatles",
      primaryColor: primaryCardColor,
      imageUrl:
        "https://i.scdn.co/image/ab67616d00001e02dc30583ba717007b00cceb25",
    },
    {
      variant: "artist",
      title: "Billie Eilish",
      primaryColor: primaryCardColor,
      imageUrl:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe342e7294ed3dc27b167f47d/2/en/default",
    },
  ];

  return (
    <div className="px-8">
      <div className="pt-5 gap-[15px] flex flex-col">
        <h2 className="text-fg-primary font-semibold font-satoshi tracking-[0.03rem] sm:text-xl dark:text-fg-primary-dark">
          Made For You
        </h2>
        <div className="flex gap-[11px] overflow-x-hidden">
          {spotifyCards.map((card) => (
            <Card
              variant={card.variant}
              title={card.title}
              tracksCount={card.tracksCount || 0}
              description={card.description || ""}
              primaryColor={card.primaryColor}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Root;
