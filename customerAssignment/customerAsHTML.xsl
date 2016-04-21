<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    

            <xsl:template match="/customers">
                    <html>
                        <body>
                           <xsl:for-each select="customer">
                                   <B>Name:</B><xsl:value-of select="name"></xsl:value-of>
                                   <BR />
                                   <B>Address:</B><xsl:value-of select="address/street">
                                   </xsl:value-of>,<xsl:value-of select="address/city">
                                   </xsl:value-of>,<xsl:value-of select="address/postalCode">
                                   </xsl:value-of><BR />
                                   <B>Phone(s):</B>
                                   <xsl:for-each select="phoneNumber"><xsl:value-of 
                                        select="number">
                                   </xsl:value-of>,<xsl:value-of select="type">
                                   </xsl:value-of>;</xsl:for-each>
                                   <BR />
                               </xsl:for-each>
                       </body>
                    </html>
            </xsl:template>

</xsl:stylesheet>