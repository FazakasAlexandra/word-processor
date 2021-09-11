
import { insertImage } from '../../utils/insertImage'
import { useSlate } from 'slate-react'
import { BaseButton } from './BaseButton'

export const ImageButton = ({ icon, label }) => {
  const editor = useSlate()
  return (
    <BaseButton
      label={label}
      onClick={() => {
        const url = prompt("Enter an Image URL");
        insertImage(editor, url);
      }}
    >
      <img style={{ width: '100%' }} src={icon} />
    </BaseButton>
  )
}
