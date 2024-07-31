namespace Algorithms.Search;

/// <summary>
/// Implements the binary search algorithm for finding the index of an element in a sorted list.
/// </summary>
public class BinarySearcher : ISearcher
{
    /// <inheritdoc cref="ISearcher.FindIndex{T}"/>
    public int FindIndex<T>(IList<T> data, T query) where T : IComparable<T>
    {
        if (data == null)
        {
            throw new ArgumentNullException(nameof(data), "The data cannot be null.");
        }

        if (query == null)
        {
            throw new ArgumentNullException(nameof(query), "The query element cannot be null.");
        }

        var left = 0;
        var right = data.Count - 1;
        var result = -1;

        while (left <= right)
        {
            var middle = left + (right - left) / 2;
            var compared = query.CompareTo(data[middle]);

            switch (compared)
            {
                case > 0:
                    left = middle + 1;
                    break;
                case < 0:
                    right = middle - 1;
                    break;
                default:
                    result = middle;
                    right = middle - 1;
                    break;
            }
        }

        return result;
    }
}