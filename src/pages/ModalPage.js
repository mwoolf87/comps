import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept.</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        placeat temporibus explicabo laboriosam quasi eos commodi provident
        repellendus dicta porro consequatur eveniet ea fuga eaque est, laborum
        nobis. Optio, eius praesentium. Voluptatum blanditiis repudiandae ipsam,
        perferendis corporis nemo obcaecati quaerat minus eum saepe numquam
        cumque fugit cupiditate commodi quod maxime laboriosam soluta! Quisquam,
        nihil. Ratione, officia quae! Perferendis illo, expedita ipsum illum
        natus quae soluta dolor eius accusamus minima atque facere blanditiis ex
        modi at, tenetur officia nesciunt doloremque facilis delectus? Maxime
        placeat veniam, in sit, itaque illum quidem doloremque ipsam rem quod,
        tempora saepe cum? Aliquid tempora veniam, eveniet saepe temporibus
        doloremque est cupiditate, dolor odit magni vero aut quaerat repellat
        corporis cum. Quos, quisquam impedit. Eaque blanditiis dignissimos, ex
        magni adipisci possimus error aut quasi officia autem consequatur
        maxime. Id, et reprehenderit voluptatum maiores aliquid numquam aut quae
        minima tempore accusantium neque impedit. Odio tempore illo facere
        numquam! Fuga aut rerum inventore nemo officiis voluptatum debitis
        cumque alias mollitia harum? Iste soluta a ex repellendus delectus illum
        consequuntur molestias expedita earum explicabo est ratione facilis,
        voluptas porro sint magni rem aperiam placeat autem quis totam fugiat
        ducimus fuga. Quis ea officiis animi inventore quaerat iusto veritatis
        ratione fugit temporibus eaque debitis eligendi, quia obcaecati
        molestiae doloribus sunt dicta esse nisi eius repudiandae nesciunt nulla
        reprehenderit pariatur iste? Vel ipsam ut quia maxime id minus animi
        repellat. Non ratione expedita quidem mollitia iure sapiente
        voluptatibus sit asperiores labore ut optio facilis ea nulla accusamus
        aspernatur perferendis minima possimus distinctio, perspiciatis
        praesentium? Exercitationem consectetur quidem ut minima enim accusamus
        perferendis vero. Impedit unde quod ipsam omnis totam nemo eius rem
        aliquid et dolores ex repudiandae, aliquam obcaecati! Quaerat natus
        nesciunt nostrum, explicabo velit quo, nulla maiores consectetur
        repellat non doloremque aut, officiis culpa odit ex animi itaque quia?
        Facilis in, rerum eligendi officiis distinctio laboriosam tempore amet
        aliquam hic quas recusandae dicta rem adipisci eos magni voluptate
        placeat sequi obcaecati sed nam voluptatem nulla qui enim? Aliquam
        facere perferendis nihil at iure minus, molestiae reiciendis? Itaque
        minima cum excepturi. Neque quae itaque obcaecati commodi qui nemo, ad
        corrupti quo totam modi aperiam. Aut ducimus, quaerat est laboriosam
        nihil id, itaque voluptates dolorum eius impedit alias reiciendis nisi
        ipsum cumque optio architecto ullam magnam incidunt pariatur tempore!
        Ratione, nesciunt. Quas accusamus tenetur necessitatibus officiis natus,
        minus in illo, odio, culpa neque eligendi sed? Hic assumenda, magni,
        corporis sint quam aperiam, eius porro sed voluptatum saepe ipsa maiores
        quisquam totam. Vitae libero ad voluptas, aut, expedita doloremque iste
        numquam error itaque saepe delectus quos ratione sapiente voluptatum
        pariatur blanditiis molestias quia omnis autem sequi fuga repellendus
        qui quod. Minima accusamus nisi repellendus illo. Voluptates impedit
        voluptatibus tempore, praesentium accusamus ab fugit quo at est quos rem
        eaque odit, debitis ipsam facilis adipisci tenetur minus dignissimos
        assumenda ipsum doloribus! Rerum et error, quia architecto sequi odit
        sed recusandae hic laborum inventore, tenetur perferendis porro ratione
        eum explicabo quibusdam delectus, aliquam repellat eaque non cupiditate.
        Voluptas beatae sapiente quis officia, laudantium illo reiciendis
        similique voluptates. Vel enim suscipit cupiditate repellendus omnis
        quia assumenda amet laborum explicabo ipsa, veniam ex consequuntur,
        itaque tenetur delectus architecto aliquid beatae temporibus? Officia
        natus molestiae provident at perspiciatis, quae non voluptas dolore
        necessitatibus? Aspernatur, voluptatem nesciunt esse nihil atque
        laboriosam quaerat natus ipsum nobis quo? A ea doloribus voluptas
        consequatur quibusdam voluptate magni? Eius perferendis ipsam architecto
        illo, eum praesentium excepturi cumque fugiat veniam sit saepe dicta ad
        placeat ex nihil tempora odit nemo sequi id animi! Rem, ab libero.
        Aperiam vel culpa saepe dolorum totam tempore praesentium ducimus
        dolores! Dolorum accusamus facilis aliquid corporis neque? Modi
        voluptatum debitis at inventore a veniam beatae rerum quisquam ipsa
        accusantium unde corrupti repellat tempore architecto officia
        reiciendis, ad nemo explicabo doloremque nesciunt, minima alias
        molestiae! Dolorum sequi quis molestias at nisi tenetur sit praesentium
        voluptates, veniam dolore, consequuntur aperiam soluta culpa odit! Eum,
        eaque autem nam corrupti repellendus quam enim vitae eligendi obcaecati
        doloribus nemo dolorum distinctio ipsum cum tenetur ipsa sint recusandae
        laborum voluptatem neque repudiandae laudantium excepturi velit!
        Possimus autem rerum, voluptas eos hic non magnam tempore obcaecati
        iusto modi porro mollitia, minus enim natus cumque necessitatibus quidem
        assumenda soluta! Adipisci numquam accusamus dicta eius commodi sapiente
        fuga. Rem odit hic corporis praesentium quaerat, debitis qui ipsum
        numquam architecto atque recusandae dignissimos. Ad vel hic ipsam
        molestias exercitationem nemo nesciunt maxime nihil optio! Vero
        distinctio delectus impedit pariatur excepturi quo ab, numquam
        consequatur error ex! Doloremque aliquam vitae hic, soluta ratione fuga
        ipsam molestias voluptatibus magnam facilis labore deserunt debitis?
        Quibusdam quasi, iure rem nemo possimus eveniet dolorum sit qui
        voluptatem labore dolor corrupti consequatur nostrum hic, iusto neque
        aut. Repellat eum, voluptate quisquam, quos explicabo tempore temporibus
        ut culpa ad cum reiciendis sint nisi. Nulla vitae aperiam sapiente
        laborum delectus veritatis tenetur quam blanditiis eum cumque. Facere
        fugit ea eius harum exercitationem veritatis eveniet vitae, officia
        expedita tempore aliquid. Ipsum minima quisquam nemo quasi, veritatis
        blanditiis. Esse, expedita praesentium pariatur ipsa quam a delectus
        enim consectetur ut accusantium inventore! Aliquam iure laboriosam odio
        nemo consequatur vel beatae hic tempore aliquid, optio quisquam
        reprehenderit ipsam debitis fuga quidem natus. Esse error sequi dolorum,
        nam laudantium voluptates perferendis! Voluptatem hic earum tempora
        perspiciatis distinctio! Dolorem laudantium dicta aliquid nisi dolor
        soluta consectetur, reiciendis ullam mollitia aperiam excepturi
        reprehenderit autem accusamus, placeat quia libero natus veniam fugit
        obcaecati earum omnis, praesentium inventore. Incidunt odit odio, totam
        voluptatem fugit voluptates ut consectetur.
      </p>
    </div>
  );
};

export default ModalPage;
