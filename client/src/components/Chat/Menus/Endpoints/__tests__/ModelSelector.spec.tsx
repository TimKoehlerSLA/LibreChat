import type React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { DAPI_ENDPOINT } from 'librechat-data-provider';
import ModelSelector from '../ModelSelector';

const contextValue = {
  agentsMap: undefined,
  assistantsMap: undefined,
  modelSpecs: [],
  mappedEndpoints: [
    {
      value: DAPI_ENDPOINT,
      label: 'DAPI',
      hasModels: true,
      models: [{ name: 'Proxy One' }],
      icon: null,
    },
  ],
  endpointsConfig: { [DAPI_ENDPOINT]: { type: 'custom' } },
  searchValue: '',
  searchResults: null,
  selectedValues: { endpoint: DAPI_ENDPOINT, model: 'Proxy One', modelSpec: null },
  setSearchValue: jest.fn(),
  setSelectedValues: jest.fn(),
  endpointSearchValues: {},
  setEndpointSearchValue: jest.fn(),
  endpointRequiresUserKey: jest.fn().mockReturnValue(false),
  handleSelectSpec: jest.fn(),
  handleSelectEndpoint: jest.fn(),
  handleSelectModel: jest.fn(),
  keyDialogOpen: false,
  onOpenChange: jest.fn(),
  keyDialogEndpoint: null,
  handleOpenKeyDialog: jest.fn(),
};

jest.mock('../ModelSelectorContext', () => ({
  ModelSelectorProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useModelSelectorContext: () => contextValue,
}));

jest.mock('../ModelSelectorChatContext', () => ({
  ModelSelectorChatProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock('~/hooks', () => ({
  useLocalize: () => (key: string) => key,
  useFavorites: () => ({
    isFavoriteModel: () => false,
    toggleFavoriteModel: jest.fn(),
    isFavoriteAgent: () => false,
    toggleFavoriteAgent: jest.fn(),
  }),
}));

describe('ModelSelector', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders DAPI proxies in the model selector menu', () => {
    render(
      <ModelSelector
        startupConfig={{
          interface: { modelSelect: true },
          modelSpecs: { list: [] },
        }}
      />,
    );

    fireEvent.click(screen.getByLabelText('com_ui_select_model'));

    act(() => {
      jest.advanceTimersByTime(150);
    });

    expect(screen.getByText('DAPI')).toBeInTheDocument();
    expect(screen.getByText('Proxy One')).toBeInTheDocument();
  });
});
