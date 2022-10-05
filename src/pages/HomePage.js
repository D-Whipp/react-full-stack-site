import articles from './article-content';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const topRatedArticle = articles[0].name;
  console.log(topRatedArticle);

  return (
    <>
      <h1>Hello, welcome to my blog!</h1>
      <p>
        Welcome to my blog! Proin ce ligula id risus posuere, vel
        eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in
        massa tincidunt egestas. Nam consectetur varius turpis, non
        porta arcu porttitor non. In tincidunt vulputate nulla quis
        egestas. Ut eleifend ut ipsum non fringilla. Praesent
        imperdiet nulla nec est luctus, at sodales purus euismod.
      </p>
      <p>
        Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales
        ultrices dapibus. Nam blandit tristique risus, eget accumsan
        nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar
        diam. Nam eleifend egestas viverra. Donec finibus lectus sed
        lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla
        eu tempor interdum, nibh elit congue tellus, ac vulputate urna
        lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui
        in facilisis aliquet.,
      </p>
      <p>
        Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam
        blandit tristique risus, eget accumsan nisl interdum eu.
        Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend
        egestas viverra. Donec finibus lectus sed lorem ultricies,
        eget ornare leo luctus. Morbi vehicula, nulla eu tempor
        interdum, nibh elit congue tellus, ac vulputate urna lorem nec
        nisi. Morbi id consequat quam. Vivamus accumsan dui in
        facilisis aliquet.,
      </p>
      <div>
        <h2 className="underline-sub-heading">Top Rated Articles:</h2>
        <ul className='no-decorations'>
          <Link className='no-decorations' to={`/articles/${topRatedArticle}`}>
            <li> {topRatedArticle}</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
