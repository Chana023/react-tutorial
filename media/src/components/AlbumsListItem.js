import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";

function AlbumListItem({ album }) {
    const header = <div>
        <Button><GoTrashcan /></Button>
        {album.title}
        </div>
      return (
      <ExpandablePanel key={album.id} header={header}>
        List of Photos in Album
      </ExpandablePanel>)
}

export default AlbumListItem;