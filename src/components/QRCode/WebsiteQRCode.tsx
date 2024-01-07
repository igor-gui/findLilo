import QRCode from "react-qr-code"
import '../../App.css'
function WebSiteQRCode({ link, text }: { link: string, text: string }) {
    return (
        <div className="qrcode">
            <h5 style={{ fontSize: "16px" }}>{text}</h5>
            <QRCode bgColor='#0c0b0b' fgColor="#c7c6c6" style={{ height: '90%' }} value={link}>  </QRCode>
        </div>
    );
}

export { WebSiteQRCode }