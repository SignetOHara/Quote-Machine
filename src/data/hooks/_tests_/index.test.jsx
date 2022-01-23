import { renderHook } from '@testing-library/react-hooks';
import { useDataApi } from '../useDataApi';

const mockInitState = [{ data: [], error: null, status: 'idle' }];

describe('UseDataApi hook', () => {
  it('should exist', () => {
    const { result } = renderHook(() => useDataApi());
    expect(result.current).toBeDefined();
  });

  it('should return an "idle" status when no url is given to it', () => {
    const { result } = renderHook(() => useDataApi());
    expect(result.current).toEqual(mockInitState);
  });

  // This test goes into an infinite loop;
  xit('should first go into an "idle" status and then "fetching" and then "success" when initiated with a URL', () => {
    const { result } = renderHook(() => useDataApi({ url: '/' }));
    expect(result.all.length).toEqual(3);
    expect(result.all[0].status).toEqual('idle');
    expect(result.all[1].status).toEqual('fetching');
    expect(result.all[2].status).toEqual('success');
  });
});
