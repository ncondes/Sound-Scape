import { MySongs } from '../components/manage/MySongs'
import { UploadBox } from '../components/manage/UploadBox'

export const ManagePage = () => {
   return (
      <div className="container mx-auto mt-6">
         <div className="md:grid md:grid-cols-3 md:gap-4">
            <UploadBox />
            <MySongs />
         </div>
      </div>
   )
}
