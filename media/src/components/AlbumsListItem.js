import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";

function AlbumListItem({ album }) {
    const [ removeAlbum, results ] = useRemoveAlbumMutation();

    const handleRemoveButton = () => {
        removeAlbum(album);
    };

    const header = <>
        <Button classname = "mr-2" loading={results.isLoading} onClick={handleRemoveButton}><GoTrashcan /></Button>
        {album.title}
        </>
      return (
      <ExpandablePanel key={album.id} header={header}>
        List of Photos in Album
      </ExpandablePanel>)
}

export default AlbumListItem;