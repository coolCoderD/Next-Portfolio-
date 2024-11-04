import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { Content } from './components/Content';
import { Loader } from './components/Loader';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Suspense } from 'react';
import { ScrollControls } from '@react-three/drei';

function App() {
  return (
    <div className="w-full h-screen bg-black relative">
      <Canvas>
        <ScrollControls pages={3} damping={0.1}>
          <Suspense fallback={null}>
            <Scene />
            <EffectComposer>
              <Bloom
                intensity={1.5}
                luminanceThreshold={0.9}
                luminanceSmoothing={0.025}
              />
            </EffectComposer>
          </Suspense>
        </ScrollControls>
      </Canvas>
      <Suspense fallback={<Loader />}>
        <Content />
      </Suspense>
    </div>
  );
}

export default App;