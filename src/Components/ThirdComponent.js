import { forwardRef,useImperativeHandle} from 'react';

const ThirdComponent = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
  
        editHandler() {
        alert("Edit from ThirdComponent");
      },
      deleteHandler() {
        alert("Delete from ThirdComponent");
      }
  
    }));
  });

export default ThirdComponent;