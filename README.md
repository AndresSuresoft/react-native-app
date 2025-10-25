![Static Badge](https://img.shields.io/badge/ReactNative-blue)
![Static Badge](https://img.shields.io/badge/VisualStudioCode-blue)
![Static Badge](https://img.shields.io/badge/TypeScript-lightblue)
![Static Badge](https://img.shields.io/badge/Css-orange)
![Static Badge](https://img.shields.io/badge/Node-green)

<h1><strong>Movie App with React Native</strong></h1>
<p>A mobile app developed with React Native and TypeScript that lets you browse, search, and save your favorite movies using The Movie Database (TMDb) API.
It includes tabbed navigation, color themes, and reusable components with an architecture based on atomic design.</p>

<h1>Design Reference</h1> 
<p>The interface design was inspired by this Figma project:</p>
<p>👉 <a href="https://www.figma.com/community/file/1126286295256197533" target="_blank" rel="noopener noreferrer">Figma – Movie App UI Kit</a></p>

<h1>Features</h1>
<section id="features">
  <ul>
    <li>Explore the <strong>most popular movies</strong> using the TMDb API.</li>
    <li><strong>Search for movies</strong> by name.</li>
    <li><strong>Filter by genres</strong> such as Action, Romance, Family, or Horror.</li>
    <li>Add and manage your favorite movies in the <strong>Wishlist</strong>.</li>
    <li>Modern interface with support for <strong>light and dark mode</strong>.</li>
    <li>Smooth animations with <strong>React Native Reanimated</strong> and <strong>Linear Gradient</strong>.</li>
    <li>Navigation using Bottom Tabs and Stack Navigation. </li>
    <li>Architecture based on Atomic Design for reusable components. </li>
  </ul>
</section>

<h1>Prerequisites</h1>
<section id="prerequisites">
  <p>Ensure your environment is configured before running the project:</p>
  <ul>
    <li><strong>Node.js</strong> version <code>&gt;= 20</code></li>
    <li><strong>React Native CLI</strong> installed globally</li>
    <li><strong>Android Studio</strong> for Android development</li>
    <li><strong>Xcode</strong> (only for iOS development on macOS)</li>
    <li><strong>API Access Token</strong> from <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">The Movie Database (TMDb)</a></li>
  </ul>
</section>

<h1>Installation and setup 🚀</h1>
<h2>1. Clone the repository</h2>
<section id="clone-repo">
  <pre>
    <code class="language-bash">
     git clone https://github.com/AndresSuresoft/react-native-app.git
    </code>
  </pre>
</section>
<h2>2. Install dependencies</h2>
<pre>
    <code class="language-bash">
     npm install
    </code>
  </pre>
<h2>3.Configure environment variables</h2>
<p>Create a .env file in the project root with the following variables:</p>
 <pre>
    <code class="language-bash">
    TMDB_ACCESS_TOKEN=
    TMDB_API_KEY=
    TMDB_BASE_URL=
    TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
    </code>
  </pre>
</section>
<section id="tmdb-access-token">
  <h3>🔑 To get your <code>ACCESS_TOKEN</code></h3>
  <ol>
    <li>
      Visit 
      <a href="https://www.themoviedb.org/settings/api" target="_blank" rel="noopener noreferrer">
        TMDb API
      </a>.
    </li>
    <li>Create an account and request an API key.</li>
    <li>Use the API Key.</li>
  </ol>
</section>
<h2>4. iOS configuration</h2>
<p>If you're going to run on iOS, install CocoaPods dependencies:</p>
<section id="ios-setup">
  <h3>⚙️ iOS configuration</h3>
  <pre>
    <code class="language-bash">
  # Install Ruby bundler (first time only)
  bundle install
   # Install IOS pods
  cd ios && bundle exec pod install && cd ..
      </code>
  </pre>
</section>

 <h2>5. Run the application 🚀</h2>
<section id="run-application">
  <h4>Android</h4>
  <pre>
    <code class="language-bash">
 npx react-native run-android
    </code>
  </pre>

  <h4>iOS</h4>
  <pre>
    <code class="language-bash">
  npm run ios
    </code>
  </pre>

  <h4>Start Metro (in separate terminal)</h4>
  <pre>
    <code class="language-bash">
 npx react-native start   
    </code>
  </pre>
</section>

<h1>Project Structure 📁</h1>
<section id="project-structure">
  <pre>
    <code>
src/
  assets/         → Contains images, icons, and other static media.
  components/     → Atomic UI elements organized as atoms, molecules, and organisms.
  constants/      → Centralized theme variables and shared app constants (like genres or colors).
  contexts/       → Application-wide state management (theme, wishlist, movie modal, etc.).
  hooks/          → Custom hooks for API requests and data handling (TMDb integration).
  navigation/     → Stack and tab navigators that manage app routing and screen flow.
  screens/        → Core app views (Home, Movies, Search, Wishlist, See More).
  types/          → Common TypeScript interfaces and type definitions shared across modules.
    </code>
  </pre>
</section>
<h1>Common issues and solutions 🔧</h1>
<h2>Metro error</h2>
 <pre>
    <code>
# Clear Metro cache
npm run clean
# Or Manually
npx react-native start --reset-cache
    </code>
  </pre>

<h1>Environment variables not working</h1>
<section id="tmdb-access-token">
  <ul>
    <li>
     Make sure the .env file is in the project root
    </li>
    <li>Restart Metro after creating/modifying the .env</li>
    <li>Verify that variables are declared in env.d.t.</li>
  </ul>
</section>



