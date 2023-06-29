import React from 'react';

import ReactFlow,{Background} from 'reactflow';

import 'reactflow/dist/style.css';
import './Canvas.css';

const Canvas = () => {
    const initialNodes = [
        { id: '1', position: { x: 0, y: 0 }, data: { label: 'HTTP Trigger' }, type:'output' },
        { id: '2', position: { x: 50, y: 50 }, data: { label: 'Signup Page' } },
        { id: '3', position: { x: 100, y: 100 }, data: { label: 'Redirect User ' } },
      ];
      const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
    return(
        <>
        <div className='canvas-conatiner'>
        <ReactFlow
            defaultEdges={initialEdges}
            defaultNodes={initialNodes}
        >
            <Background />
        </ReactFlow>
        </div>
        </>
    )
}

export default Canvas;