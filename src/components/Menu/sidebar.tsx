import Button from "../default/button";
import Icon from "../default/icon";
import Pin from "../../assets/icons/pin.svg"
import Playlist from "../../assets/icons/playlist.svg"
import Like from "../../assets/icons/like.svg"
import Save from "../../assets/icons/save.svg"
import Albums from "../../assets/icons/album.svg"
import Podcasts from "../../assets/icons/podcast.svg"
import Audiobooks from "../../assets/icons/audiobook.svg"
import Artists from "../../assets/icons/artist.svg"

export default function Sidebar({className}: {className?: string}) {
  return (
    <div className={`h-64 ${className}`}>
        <div className="pl-1 space-y-2">
        <Button className="">
            <Icon src={Pin} alt="" ></Icon>
            <span>Pins</span>
        </Button>

        <Button className="">
            <Icon src={Playlist} alt="" ></Icon>
            <span>Playlist</span>
        </Button>

        <Button className="">
            <Icon src={Like} alt="" ></Icon>
            <span>Liked songs</span>
        </Button>

        <Button className="">
            <Icon src={Save} alt="" ></Icon>
            <span>Saves</span>
        </Button>

        <Button className="">
            <Icon src={Albums} alt="" ></Icon>
            <span>Albums</span>
        </Button>

        <Button className="">
            <Icon src={Podcasts} alt="" ></Icon>
            <span>Podcasts</span>
        </Button>

        <Button className="">
            <Icon src={Audiobooks} alt="" ></Icon>
            <span>Audiobooks</span>
        </Button>

        <Button className="">
            <Icon src={Artists} alt="" ></Icon>
            <span>Artists</span>
        </Button>
        </div>
    </div>
  );
}
