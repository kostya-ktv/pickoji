import {describe, test} from "@jest/globals";
import {fireEvent, render} from "@testing-library/react";
import Card from "@/components/Card/Card";
import {ICard} from "@/util/types";

describe('Card component', () => {
    const mockCard: ICard = {
        symbol: "❤️",
        title: "Heart",
        keywords: 'heart'
    }

    test('render in doc', () => {
        render(<Card card={mockCard} />);
        const cardElement = document.querySelector(".card");

        expect(cardElement).toBeInTheDocument();
    })
    test('renders card with correct symbol and title', () => {
        const { getByText } = render(<Card card={mockCard} />);
        const symbolElement = getByText(mockCard.symbol);
        const titleElement = getByText(mockCard.title);

        expect(symbolElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();
    })

    test("calls handleSave when clicked and isCopied is false", () => {
        jest.mock("../../components/Card/hooks/useSaveEmoji", () => {
            const handleSaveMock = jest.fn();

            const { getByText } = render(<Card card={mockCard} />);
            const cardElement = getByText(mockCard.symbol);

            fireEvent.click(cardElement);

            expect(handleSaveMock).toHaveBeenCalledTimes(1);
            expect(handleSaveMock).toHaveBeenCalledWith(mockCard);
        });

    });
})