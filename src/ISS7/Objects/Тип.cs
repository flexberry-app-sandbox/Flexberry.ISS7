﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.ISS7
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Тип.
    /// </summary>
    // *** Start programmer edit section *** (Тип CustomAttributes)

    // *** End programmer edit section *** (Тип CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТипE", new string[] {
            "Название as \'Название\'"})]
    [View("ТипL", new string[] {
            "Название as \'Название\'"})]
    public class Тип : ICSSoft.STORMNET.DataObject
    {
        
        private string fНазвание;
        
        // *** Start programmer edit section *** (Тип CustomMembers)

        // *** End programmer edit section *** (Тип CustomMembers)

        
        /// <summary>
        /// Название.
        /// </summary>
        // *** Start programmer edit section *** (Тип.Название CustomAttributes)

        // *** End programmer edit section *** (Тип.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                // *** Start programmer edit section *** (Тип.Название Get start)

                // *** End programmer edit section *** (Тип.Название Get start)
                string result = this.fНазвание;
                // *** Start programmer edit section *** (Тип.Название Get end)

                // *** End programmer edit section *** (Тип.Название Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Тип.Название Set start)

                // *** End programmer edit section *** (Тип.Название Set start)
                this.fНазвание = value;
                // *** Start programmer edit section *** (Тип.Название Set end)

                // *** End programmer edit section *** (Тип.Название Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТипE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТипE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТипE", typeof(IIS.ISS7.Тип));
                }
            }
            
            /// <summary>
            /// "ТипL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТипL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТипL", typeof(IIS.ISS7.Тип));
                }
            }
        }
    }
}
