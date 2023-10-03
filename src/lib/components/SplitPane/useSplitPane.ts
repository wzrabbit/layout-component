import { useState, useEffect, useCallback } from 'react';
import type { RefObject } from 'react';
import useElementSize from '../hooks/useElementSize';
import { Direction } from '../../types';

type UseSplitPaneProps = {
  rootRef: RefObject<HTMLDivElement>;
  direction: Direction;
  defaultRatios: number[];
  minimumRatio: number;
  maximumRatio: number;
};

type UseSplitPaneState = {
  elementRatios: number[];
  isHolding: boolean;
  holdingResizerId: number;
  mousePoint: { x: number; y: number };
};

const useSplitPane = (props: UseSplitPaneProps) => {
  const { rootRef, direction, defaultRatios, minimumRatio, maximumRatio } =
    props;
  const { width, height } = useElementSize(rootRef);
  const [splitPaneState, setSplitPaneState] = useState<UseSplitPaneState>({
    elementRatios: defaultRatios,
    isHolding: false,
    holdingResizerId: 0,
    mousePoint: { x: 0, y: 0 },
  });
  const { elementRatios, isHolding } = splitPaneState;

  const getCalculatedElementRatios = useCallback(
    (
      resizerId: number,
      elementRatios: number[],
      mouseXDiff: number,
      mouseYDiff: number
    ) => {
      const calculatedElementRatios = elementRatios.slice();
      const mouseDiffRatio =
        direction === 'row'
          ? (mouseXDiff / width) * 100
          : (mouseYDiff / height) * 100;
      const moveDirection = mouseDiffRatio > 0 ? 'right' : 'left';
      let absMouseDiffRatio = Math.abs(mouseDiffRatio);
      let movedMouseDiffRatio = 0;

      if (moveDirection === 'right') {
        absMouseDiffRatio = Math.min(
          absMouseDiffRatio,
          maximumRatio - calculatedElementRatios[resizerId]
        );

        for (let i = resizerId + 1; i < calculatedElementRatios.length; i++) {
          const currentMovedDiffRatio = Math.min(
            calculatedElementRatios[i] - minimumRatio,
            absMouseDiffRatio - movedMouseDiffRatio
          );

          movedMouseDiffRatio += currentMovedDiffRatio;
          calculatedElementRatios[i] -= currentMovedDiffRatio;
        }

        calculatedElementRatios[resizerId] += movedMouseDiffRatio;
      } else {
        absMouseDiffRatio = Math.min(
          absMouseDiffRatio,
          maximumRatio - calculatedElementRatios[resizerId + 1]
        );

        for (let i = resizerId; i >= 0; i--) {
          const currentMovedDiffRatio = Math.min(
            calculatedElementRatios[i] - minimumRatio,
            absMouseDiffRatio - movedMouseDiffRatio
          );

          movedMouseDiffRatio += currentMovedDiffRatio;
          calculatedElementRatios[i] -= currentMovedDiffRatio;
        }

        calculatedElementRatios[resizerId + 1] += movedMouseDiffRatio;
      }

      return calculatedElementRatios;
    },
    [direction, height, width, minimumRatio, maximumRatio]
  );

  useEffect(() => {
    const handleMouseDown = (event: globalThis.MouseEvent) => {
      event.stopPropagation();

      if (!(event.target instanceof HTMLElement)) {
        return;
      }

      const resizerId = event.target.getAttribute('data-resizer-id');
      const { clientX, clientY } = event;

      if (resizerId) {
        setSplitPaneState((prevSplitPaneState) => {
          return {
            ...prevSplitPaneState,
            isHolding: true,
            holdingResizerId: Number(resizerId),
            mousePoint: { x: clientX, y: clientY },
          };
        });
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      event.stopPropagation();

      if (!isHolding || !(event.target instanceof HTMLElement)) {
        return;
      }

      const { clientX, clientY } = event;

      setSplitPaneState((prevSplitPaneState) => {
        const { mousePoint, holdingResizerId, elementRatios } =
          prevSplitPaneState;
        const mouseXDiff = clientX - mousePoint.x;
        const mouseYDiff = clientY - mousePoint.y;

        const calculatedElementRatios = getCalculatedElementRatios(
          holdingResizerId,
          elementRatios,
          mouseXDiff,
          mouseYDiff
        );

        return {
          ...prevSplitPaneState,
          isHolding: true,
          mousePoint: { x: clientX, y: clientY },
          elementRatios: calculatedElementRatios,
        };
      });
    };

    const handleMouseUp = () => {
      if (!isHolding) {
        return;
      }

      setSplitPaneState((prevSplitPaneState) => {
        return {
          ...prevSplitPaneState,
          isHolding: false,
        };
      });
    };

    const handleIgnoreEvent = (event: MouseEvent) => {
      event.preventDefault();
    };

    const rootElement = rootRef.current;

    if (!rootElement) {
      return;
    }

    rootElement.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    rootElement.addEventListener('dragstart', handleIgnoreEvent);
    rootElement.addEventListener('drop', handleIgnoreEvent);

    return () => {
      rootElement.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      rootElement.removeEventListener('dragstart', handleIgnoreEvent);
      rootElement.removeEventListener('drop', handleIgnoreEvent);
    };
  }, [
    getCalculatedElementRatios,
    isHolding,
    rootRef,
    splitPaneState.isHolding,
  ]);

  return { elementRatios };
};

export default useSplitPane;
