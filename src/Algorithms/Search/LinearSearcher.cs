namespace Algorithms.Search;

/// <summary>
/// Implements the linear search algorithm for finding the index of an element in a sorted list.
/// </summary>
public class LinearSearcher : ISearcher
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

        if (data.Count == 0)
        {
            return -1;
        }

        for (var i = 0; i < data.Count; ++i)
        {
            if (query.CompareTo(data[i]) == 0)
            {
                return i;
            }
        }

        return -1;
    }
}