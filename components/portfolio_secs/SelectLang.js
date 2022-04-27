import {AiFillCloseCircle} from "react-icons/ai";

function SelectLangs({setShowModal}) {
  return (
    <div className="absolute left-0 top-0 w-screen h-screen flex items-center justify-center bg-[#000000cc]">
      <div className="w-4/5 max-w-lg rounded-xl bg-primary px-8 py-10 text-center relative">
          <AiFillCloseCircle className="absolute top-4 left-4 w-5 h-5 cursor-pointer" onClick={()=>setShowModal(false)}/>
        <h4 className="text-2xl">Select PDF's language</h4>
        <div className="flex justify-around px-3 mt-10">
          <a
            download="Meraji_CV.pdf"
            href="/Meraji_CV.pdf"
            className="bg-accent py-2 px-4 text-onAccent rounded-lg"
          >
            English
          </a>
          <a
            download="Meraji_CV_persianpdf"
            href="/Meraji_CV_persian.pdf"
            className="bg-accent py-2 px-4 text-onAccent rounded-lg"
          >
            فارسی
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default SelectLangs
