import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [ showModal, setShowModal ] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false)
    };

    const actionBar = <div>
        <Button primary onClick={handleClose}>I accept</Button>
    </div>

    const modal = <Modal  onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement to accept</p>
    </Modal>

    return (
    <div>
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et augue elit. Vivamus cursus lorem non libero auctor ornare. Vivamus efficitur, felis vitae elementum sollicitudin, dui magna consectetur enim, non venenatis arcu risus a lorem. Vestibulum volutpat magna eros, tincidunt vulputate nisi ultricies vitae. Cras tristique orci eget nibh pellentesque commodo. Sed urna nunc, sollicitudin volutpat pretium vitae, fringilla non dolor. Suspendisse feugiat augue vel consectetur tristique. Mauris dapibus posuere mollis. Mauris mattis ligula purus. Ut eu imperdiet odio, eget ultricies magna. Pellentesque vel turpis ac libero fermentum consequat pulvinar et nulla. Praesent pulvinar neque a libero scelerisque aliquet.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et augue elit. Vivamus cursus lorem non libero auctor ornare. Vivamus efficitur, felis vitae elementum sollicitudin, dui magna consectetur enim, non venenatis arcu risus a lorem. Vestibulum volutpat magna eros, tincidunt vulputate nisi ultricies vitae. Cras tristique orci eget nibh pellentesque commodo. Sed urna nunc, sollicitudin volutpat pretium vitae, fringilla non dolor. Suspendisse feugiat augue vel consectetur tristique. Mauris dapibus posuere mollis. Mauris mattis ligula purus. Ut eu imperdiet odio, eget ultricies magna. Pellentesque vel turpis ac libero fermentum consequat pulvinar et nulla. Praesent pulvinar neque a libero scelerisque aliquet.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et augue elit. Vivamus cursus lorem non libero auctor ornare. Vivamus efficitur, felis vitae elementum sollicitudin, dui magna consectetur enim, non venenatis arcu risus a lorem. Vestibulum volutpat magna eros, tincidunt vulputate nisi ultricies vitae. Cras tristique orci eget nibh pellentesque commodo. Sed urna nunc, sollicitudin volutpat pretium vitae, fringilla non dolor. Suspendisse feugiat augue vel consectetur tristique. Mauris dapibus posuere mollis. Mauris mattis ligula purus. Ut eu imperdiet odio, eget ultricies magna. Pellentesque vel turpis ac libero fermentum consequat pulvinar et nulla. Praesent pulvinar neque a libero scelerisque aliquet.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et augue elit. Vivamus cursus lorem non libero auctor ornare. Vivamus efficitur, felis vitae elementum sollicitudin, dui magna consectetur enim, non venenatis arcu risus a lorem. Vestibulum volutpat magna eros, tincidunt vulputate nisi ultricies vitae. Cras tristique orci eget nibh pellentesque commodo. Sed urna nunc, sollicitudin volutpat pretium vitae, fringilla non dolor. Suspendisse feugiat augue vel consectetur tristique. Mauris dapibus posuere mollis. Mauris mattis ligula purus. Ut eu imperdiet odio, eget ultricies magna. Pellentesque vel turpis ac libero fermentum consequat pulvinar et nulla. Praesent pulvinar neque a libero scelerisque aliquet.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et augue elit. Vivamus cursus lorem non libero auctor ornare. Vivamus efficitur, felis vitae elementum sollicitudin, dui magna consectetur enim, non venenatis arcu risus a lorem. Vestibulum volutpat magna eros, tincidunt vulputate nisi ultricies vitae. Cras tristique orci eget nibh pellentesque commodo. Sed urna nunc, sollicitudin volutpat pretium vitae, fringilla non dolor. Suspendisse feugiat augue vel consectetur tristique. Mauris dapibus posuere mollis. Mauris mattis ligula purus. Ut eu imperdiet odio, eget ultricies magna. Pellentesque vel turpis ac libero fermentum consequat pulvinar et nulla. Praesent pulvinar neque a libero scelerisque aliquet.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et augue elit. Vivamus cursus lorem non libero auctor ornare. Vivamus efficitur, felis vitae elementum sollicitudin, dui magna consectetur enim, non venenatis arcu risus a lorem. Vestibulum volutpat magna eros, tincidunt vulputate nisi ultricies vitae. Cras tristique orci eget nibh pellentesque commodo. Sed urna nunc, sollicitudin volutpat pretium vitae, fringilla non dolor. Suspendisse feugiat augue vel consectetur tristique. Mauris dapibus posuere mollis. Mauris mattis ligula purus. Ut eu imperdiet odio, eget ultricies magna. Pellentesque vel turpis ac libero fermentum consequat pulvinar et nulla. Praesent pulvinar neque a libero scelerisque aliquet.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et augue elit. Vivamus cursus lorem non libero auctor ornare. Vivamus efficitur, felis vitae elementum sollicitudin, dui magna consectetur enim, non venenatis arcu risus a lorem. Vestibulum volutpat magna eros, tincidunt vulputate nisi ultricies vitae. Cras tristique orci eget nibh pellentesque commodo. Sed urna nunc, sollicitudin volutpat pretium vitae, fringilla non dolor. Suspendisse feugiat augue vel consectetur tristique. Mauris dapibus posuere mollis. Mauris mattis ligula purus. Ut eu imperdiet odio, eget ultricies magna. Pellentesque vel turpis ac libero fermentum consequat pulvinar et nulla. Praesent pulvinar neque a libero scelerisque aliquet.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et augue elit. Vivamus cursus lorem non libero auctor ornare. Vivamus efficitur, felis vitae elementum sollicitudin, dui magna consectetur enim, non venenatis arcu risus a lorem. Vestibulum volutpat magna eros, tincidunt vulputate nisi ultricies vitae. Cras tristique orci eget nibh pellentesque commodo. Sed urna nunc, sollicitudin volutpat pretium vitae, fringilla non dolor. Suspendisse feugiat augue vel consectetur tristique. Mauris dapibus posuere mollis. Mauris mattis ligula purus. Ut eu imperdiet odio, eget ultricies magna. Pellentesque vel turpis ac libero fermentum consequat pulvinar et nulla. Praesent pulvinar neque a libero scelerisque aliquet.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et augue elit. Vivamus cursus lorem non libero auctor ornare. Vivamus efficitur, felis vitae elementum sollicitudin, dui magna consectetur enim, non venenatis arcu risus a lorem. Vestibulum volutpat magna eros, tincidunt vulputate nisi ultricies vitae. Cras tristique orci eget nibh pellentesque commodo. Sed urna nunc, sollicitudin volutpat pretium vitae, fringilla non dolor. Suspendisse feugiat augue vel consectetur tristique. Mauris dapibus posuere mollis. Mauris mattis ligula purus. Ut eu imperdiet odio, eget ultricies magna. Pellentesque vel turpis ac libero fermentum consequat pulvinar et nulla. Praesent pulvinar neque a libero scelerisque aliquet.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et augue elit. Vivamus cursus lorem non libero auctor ornare. Vivamus efficitur, felis vitae elementum sollicitudin, dui magna consectetur enim, non venenatis arcu risus a lorem. Vestibulum volutpat magna eros, tincidunt vulputate nisi ultricies vitae. Cras tristique orci eget nibh pellentesque commodo. Sed urna nunc, sollicitudin volutpat pretium vitae, fringilla non dolor. Suspendisse feugiat augue vel consectetur tristique. Mauris dapibus posuere mollis. Mauris mattis ligula purus. Ut eu imperdiet odio, eget ultricies magna. Pellentesque vel turpis ac libero fermentum consequat pulvinar et nulla. Praesent pulvinar neque a libero scelerisque aliquet.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et augue elit. Vivamus cursus lorem non libero auctor ornare. Vivamus efficitur, felis vitae elementum sollicitudin, dui magna consectetur enim, non venenatis arcu risus a lorem. Vestibulum volutpat magna eros, tincidunt vulputate nisi ultricies vitae. Cras tristique orci eget nibh pellentesque commodo. Sed urna nunc, sollicitudin volutpat pretium vitae, fringilla non dolor. Suspendisse feugiat augue vel consectetur tristique. Mauris dapibus posuere mollis. Mauris mattis ligula purus. Ut eu imperdiet odio, eget ultricies magna. Pellentesque vel turpis ac libero fermentum consequat pulvinar et nulla. Praesent pulvinar neque a libero scelerisque aliquet.
        </p>

    </div>);
}

export default ModalPage;