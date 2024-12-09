export default function Footer() {
  return (
    <div>
      <div className="bg-blue-500 p-14 text-center">
        <h2 className="text-white text-2xl font-bold mb-5">
          Inscreva-se em nossa newsletter
        </h2>
        <input
          type="text"
          placeholder="Seu email"
          className="shadow-md w-full max-w-xs p-2 px-4 rounded-md"
        />
        <input
          type="button"
          value="Inscreve"
          className="bg-orange-400 p-2 px-4 text-white ml-2 rounded-md cursor-pointer"
        />
      </div>

      <footer className="bg-slate-900 text-white flex justify-center gap-10 p-10">
        <div className=" ">
          <h2 className="font-bold text-xl">Smartfy</h2>
          <p className="mt-2">
            Contato Suporte <br />
            (629) 555-0129 <br />
            info@smartfy.com
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl">Categorias</h2>
          <p className="mt-2">
            Celulares <br />
            Samsung <br />
            Xiaomi <br />
            iPhone
          </p>
        </div>
      </footer>
      <hr />

      <p className="text-center font-medium bg-slate-900 text-white p-3">
        &copy;2024 Smartfy. Todos os direitos estão reservados.
      </p>
    </div>
  );
}
