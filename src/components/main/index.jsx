import styles from "./styles.module.css";

function MainContainer({ color, backgroundColor }) {
  return (
    <main
      style={{ backgroundColor: backgroundColor, color: color }}
      className={styles.main_container}
    >
      <div className={styles.content_container}>
        <h1>First paragraph</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          sunt dolore, eos, recusandae nulla molestias incidunt quod, veniam
          ipsa odio obcaecati dolores! Nam, corrupti accusantium perspiciatis
          sapiente maiores fuga sed, reprehenderit quis, expedita doloribus
          incidunt molestiae ad sit quam quaerat reiciendis dolorum voluptatibus
          quo optio mollitia voluptatem inventore illo dignissimos.
        </p>
        <h1>Second paragraph</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum culpa
          sed quisquam, inventore corporis necessitatibus obcaecati dolorum at
          dignissimos aliquam id incidunt perferendis mollitia praesentium.
          Assumenda molestias saepe, facere ratione eius vel voluptatum
          repellendus officiis velit nulla at amet rem quasi deserunt asperiores
          unde odit hic nobis reiciendis nesciunt tempora!
        </p>
      </div>
    </main>
  );
}

export default MainContainer;
