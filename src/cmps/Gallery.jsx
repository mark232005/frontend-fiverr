import { useEffect, useState } from "react";
import { InfoIcon } from "../svg";
import { uploadService } from "../services/upload.service";



export function Gallery({ createGig, gig }) {
  const [images, setImages] = useState(gig.imgUrl || [])
  useEffect(() => {
    createGig('imgUrl', images)

  }, [images])
  async function uploadImg(ev) {
    ev.preventDefault()
    try {
      const { secure_url } = await uploadService.uploadImg(ev)
      const newImage = secure_url

      setImages(prevImages => {
        const updated = [...prevImages]
        const firstEmptyIndex = updated.findIndex(img => !img)
        if (firstEmptyIndex !== -1) {
          updated[firstEmptyIndex] = newImage
        } else if (updated.length < 6) {
          updated.push(newImage)
        }
        return updated
      })

    } catch (err) {
      console.error('Upload failed:', err)
    }

  }
  return (
    <section className="gallery">
      <header>
        <h3>Showcase Your Services In A Gig Gallery</h3>
        <small>Encourage buyers to choose your Gig by featuring a variety of your work.</small>
        <div className="msg flex">
          <span><InfoIcon /></span>
          <p>To comply with Alufix’s terms of service, make sure to upload only content you either own or you have the permission or license to use.</p>
        </div>
      </header>
      <div className="imges">
        <div className="title-gallery">
          <h3>Images (up to 6)</h3>
          <p>Get noticed by the right buyers with visual examples of your services.</p>
        </div>
        <div className="drop flex">
          {[...Array(6)].map((_, idx) => (
            <div className="dropzone" key={idx}>
              <div className="dropzone-body">
                {images[idx] ? (
                  <img
                    src={images[idx]}
                    alt={`preview-${idx}`}
                  />
                ) : (
                  <>
                    Drag & drop a Photo or
                    <br />
                    <label htmlFor={`img-${idx}`}>
                      Browse
                      <input
                        type="file"
                        id={`img-${idx}`}
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={uploadImg}
                      />
                    </label>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}