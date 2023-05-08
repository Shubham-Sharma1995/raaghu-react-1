import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RdsPagination } from '../src';
import { getByTestId } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

describe('RdsPagination', () => {
    it('renders correctly with default props', () => {
        const { container } = render(<RdsPagination totalRecords={100} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('renders the correct number of pages based on total records and records per page', () => {
        const { getByTestId, getByText } = render(
            <RdsPagination totalRecords={50} recordsPerPage={10} />
        );
        expect(getByTestId('page-link')).toHaveTextContent('12345');
        fireEvent.click(getByText('2'));
        expect(getByTestId('page-link')).toHaveTextContent('12345');
    });

})