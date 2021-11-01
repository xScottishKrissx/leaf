import React, { useState, useEffect, useRef } from 'react';

function IntersectContainer() {

    let [state, setState] = useState({
        visible: false,
        ratio: 0
    })  

    const ref = useRef()

    useEffect(() => {    const observer = new IntersectionObserver(([entry])=> {
        setState({
        visible: entry.isIntersecting,
        ratio: entry.intersectionRatio
        })
    }), {threshold: [.25, .5, .75, 1]})
  });



    if (ref.current) observer.observe(ref.current)
    return () => {
        observer.unobserve(ref.current);
        };
    }, []); 
    }

    let children = React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
            isVisible: state.visible,
            ratio: state.ratio
        });
        });

  return (
    <div className="intersectionComponent">
        {children}
    </div>

  );
}