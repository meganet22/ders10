import Header from "./components/Header";
import Footer from "./components/Footer";

function Iletisim() {
    return <>
        <Header />
        <section>
            <h1>İletişim</h1>
            <p>Aşağıdaki ileitişim formu ile bize ulaşabilirsiniz.</p>
            <form action="">
                <div>
                    <label htmlFor="">Ad Soyad</label><br />
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">E-Posta</label><br />
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="">Mesajınız</label><br />
                    <textarea name="" id="" cols="30" rows="10">Mesajınız</textarea>
                </div>
                <button type="submit">Gönder</button>
            </form>
        </section>
        <Footer />
    </>
}

export default Iletisim;