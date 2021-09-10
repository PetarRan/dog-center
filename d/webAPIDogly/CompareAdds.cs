using System;
using System.Collections.Generic;
using webAPIDogly.Models;
namespace webAPIDogly
{
    

public class AddComp : IComparer<Advertisement>
{
    // Compares by Height, Length, and Width.
    public int Compare(Advertisement x, Advertisement y)
    {
        String[] prvi = x.LastUpdate.Split("/");
        String[] drugi = y.LastUpdate.Split("/");

        if (Int32.Parse(prvi[2]).CompareTo(Int32.Parse(drugi[2])) != 0)
        {
            return Int32.Parse(prvi[2]).CompareTo(Int32.Parse(drugi[2]));
        }
        else if (Int32.Parse(prvi[0]).CompareTo(Int32.Parse(drugi[0])) != 0)
        {
            return Int32.Parse(prvi[0]).CompareTo(Int32.Parse(drugi[0]));
        }
        else if (Int32.Parse(prvi[1]).CompareTo(Int32.Parse(drugi[1])) != 0)
        {
            return Int32.Parse(prvi[2]).CompareTo(Int32.Parse(drugi[2]));
        }
        else
        {
            return 0;
        }
    }
}
}