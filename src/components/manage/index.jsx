import React from 'react'
import { UploadBox } from './UploadBox'
import { MySongs } from './MySongs'

export const Manage = () => {
   return (
      <div className="container mx-auto flex">
         <UploadBox />
         <MySongs />
      </div>
   )
}
