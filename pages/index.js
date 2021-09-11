import React, { useCallback, useEffect, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, Slate } from 'slate-react'
import {
  createEditor,
} from 'slate'
import { withHistory } from 'slate-history'
import { Toolbar } from '../components/Toolbar'
import { Leaf } from '../utils/Leaf'
import { initialValue } from '../utils/initialValue'
import { Element } from '../utils/Element'
import { withImages } from '../utils/insertImage'
import { toggleMark } from '../components/editorButtons/MarkButton'
import { Preview } from '../components/Preview'
// @refresh reset

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const RichTextExample = () => {
  const [value, setValue] = useState(initialValue)
  const [isPreview, setIsPreview] = useState(false)
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withImages(withHistory(withReact(createEditor()))), [])

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <main style={{
      display: 'flex',
      padding: '2rem 0',
      background: !isPreview && '#EDC8F4' || 'inherit',
      minHeight: '100vh'
    }}>{
        !isPreview ?
          <div style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            margin: "0 auto",
            fontSize: "16px",
            height: "fit-content",
            boxShadow: "0px 9px 61px rgba(0, 0, 0, 0.25)",
            maxWidth: '1000px'
          }}
          >
            <Slate editor={editor} value={value} className="editor" onChange={value => setValue(value)}>
              <Toolbar
                isPreview={isPreview}
                setPreview={setIsPreview}
                style={{ display: 'flex', justifyContent: 'space-between' }}
              />
              <Editable
                style={{ padding: '0 38px 38px' }}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder="Write anything…"
                spellCheck={false}
                autoFocus={false}
                autoCapitalize="false"
                autoCorrect="false"
                onKeyDown={event => {
                  for (const hotkey in HOTKEYS) {
                    if (isHotkey(hotkey, event)) {
                      event.preventDefault()
                      const mark = HOTKEYS[hotkey]
                      toggleMark(editor, mark)
                    }
                  }
                }}
              />
            </Slate>
          </div>
          : <Preview style={{ maxWidth: '1000px' }}nodes={value} isPreview={isPreview} setPreview={setIsPreview} />
      }
    </main>
  )
}

export default RichTextExample