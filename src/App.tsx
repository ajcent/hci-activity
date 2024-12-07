import { useState } from "react";
import "./App.css";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./components/ui/menubar";
import { Textarea } from "./components/ui/textarea";

function App() {
  const [content, setContent] = useState("");

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  return (
    <div className="flex flex-col h-screen bg-background dark">
      <Menubar className="border-b px-2 lg:px-4 py-2 m-2 overflow-x-auto overflow-y-hidden">
        <MenubarMenu>
          <MenubarTrigger className="font-bold text-foreground">
            File
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Open File</MenubarItem>
            <MenubarItem>Open Copy of File</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Save <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Save As</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Close File</MenubarItem>
            <MenubarItem>
              Quit <MenubarShortcut>⌘Q</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-bold text-foreground">
            Edit
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Cut <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Copy <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Paste <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Clear</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Find Word</MenubarItem>
            <MenubarItem>Change Word</MenubarItem>
            <MenubarItem>Repeat Edit</MenubarItem>
            <MenubarItem>Go To</MenubarItem>
            <MenubarItem>Go Back</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-bold text-foreground">
            Format
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Character Style</MenubarItem>
            <MenubarItem>Plain Text</MenubarItem>
            <MenubarItem>Bold Text</MenubarItem>
            <MenubarItem>Italic Text</MenubarItem>
            <MenubarItem>Underline</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Format Paragraph</MenubarItem>
            <MenubarItem>Layout Document</MenubarItem>
            <MenubarItem>Position on Page</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Increase Point Size</MenubarItem>
            <MenubarItem>Decrease Point Size</MenubarItem>
            <MenubarItem>Change Font</MenubarItem>
            <MenubarItem>Add Footnote</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-bold text-foreground">
            Insert
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Add Page Break</MenubarItem>
            <MenubarItem>Insert Graphic</MenubarItem>
            <MenubarItem>Insert Index Entry</MenubarItem>
            <MenubarItem>Table</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-bold text-foreground">
            Tools
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Check Spelling</MenubarItem>
            <MenubarItem>Count Words</MenubarItem>
            <MenubarItem>Renumber Pages</MenubarItem>
            <MenubarItem>Repaginate</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-bold text-foreground">
            View
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>View Page</MenubarItem>
            <MenubarItem>Print Preview</MenubarItem>
            <MenubarItem>See Table of Contents</MenubarItem>
            <MenubarItem>View Index</MenubarItem>
            <MenubarItem>Show Alternative Document</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-bold text-foreground">
            Page Setup
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Page Setup</MenubarItem>
            <MenubarItem>Preferences</MenubarItem>
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-bold text-foreground">
            Mail
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Open Mail</MenubarItem>
            <MenubarItem>Send Mail</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="font-bold text-foreground">
            Help
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Help</MenubarItem>
            <MenubarItem>About</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex-grow p-4">
        <Textarea
          className="w-full h-full min-h-[300px] p-4 resize-none border-2 border-input bg-background text-foreground"
          placeholder="Start typing..."
          value={content}
          onChange={handleContentChange}
        />
      </div>
    </div>
  );
}

export default App;
